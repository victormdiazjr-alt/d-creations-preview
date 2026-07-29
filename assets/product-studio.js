const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function bindFilePreviews() {
  $$('[data-file-input]').forEach((input) => {
    const preview = document.getElementById(input.dataset.preview);
    if (!preview) return;
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      if (!file || !file.type.startsWith('image/')) {
        preview.classList.remove('is-visible');
        preview.replaceChildren();
        return;
      }
      const img = new Image();
      img.alt = `Vista previa de ${file.name}`;
      img.src = URL.createObjectURL(file);
      img.onload = () => URL.revokeObjectURL(img.src);
      const name = document.createElement('small');
      name.textContent = file.name;
      preview.replaceChildren(img, name);
      preview.classList.add('is-visible');
    });
  });
}

const sizeData = {
  large: { name: 'Large', use: 'Libros', width: 384, height: 192, measure: 'Ancho: 4″ · Largo: 2″', price: 2 },
  medium: { name: 'Medium', use: 'Libretas', width: 307, height: 154, measure: 'Ancho: 3.2″ · Largo: 1.6″', price: 1.5 },
  small: { name: 'Small', use: 'Materiales', width: 192, height: 72, measure: 'Ancho: 2″ · Largo: 0.75″', price: 1 },
  mini: { name: 'Mini', use: 'Lápices', width: 120, height: 36, measure: 'Ancho: 1.25″ · Largo: 0.375″', price: 0.75 }
};
const finishDelta = { matte: 0, glossy: .25, reflective: .25 };

function selectedValue(name, root = document) {
  return $(`input[name="${name}"]:checked`, root)?.value;
}

function bindLabelsConfigurator() {
  const root = $('[data-labels-builder]');
  if (!root) return;
  const shape = $('[data-size-shape]', root);
  const measurement = $('[data-size-measurement]', root);
  const use = $('[data-size-use]', root);
  const summarySize = $('[data-summary-size]', root);
  const summaryFinish = $('[data-summary-finish]', root);
  const summaryPrice = $('[data-summary-price]', root);
  const update = () => {
    const sizeKey = selectedValue('label-size', root) || 'large';
    const finishKey = selectedValue('label-finish', root) || 'matte';
    const data = sizeData[sizeKey];
    shape.style.width = `${data.width}px`;
    shape.style.height = `${data.height}px`;
    measurement.textContent = data.measure;
    use.textContent = `Uso sugerido: ${data.use}`;
    summarySize.textContent = data.name;
    summaryFinish.textContent = finishKey === 'matte' ? 'Matte' : finishKey === 'glossy' ? 'Glossy' : 'Reflective';
    summaryPrice.textContent = `$${(data.price + finishDelta[finishKey]).toFixed(2)}`;
  };
  root.addEventListener('change', (event) => {
    if (event.target.matches('input[name="label-size"],input[name="label-finish"]')) update();
  });
  update();

  const list = $('[data-line-list]', root);
  const add = $('[data-add-line]', root);
  let count = $$('.line-row', list).length;
  const makeLine = () => {
    count += 1;
    const row = document.createElement('div');
    row.className = 'line-row';
    row.innerHTML = `<div class="field"><label>Nombre del campo</label><input name="Campo ${count}" placeholder="Ej. Equipo"></div><div class="field"><label>Texto</label><input name="Texto ${count}" placeholder="Ej. Las Estrellas"></div><div class="line-actions"><button class="icon-button" type="button" data-move-up aria-label="Mover arriba">↑</button><button class="icon-button" type="button" data-move-down aria-label="Mover abajo">↓</button><button class="icon-button" type="button" data-remove-line aria-label="Borrar línea">×</button></div>`;
    list.append(row);
  };
  add?.addEventListener('click', makeLine);
  list?.addEventListener('click', (event) => {
    const row = event.target.closest('.line-row');
    if (!row) return;
    if (event.target.closest('[data-remove-line]')) row.remove();
    if (event.target.closest('[data-move-up]') && row.previousElementSibling) list.insertBefore(row, row.previousElementSibling);
    if (event.target.closest('[data-move-down]') && row.nextElementSibling) list.insertBefore(row.nextElementSibling, row);
  });
}

function bindNfcSlider() {
  const slider = $('[data-nfc-slider]');
  if (!slider) return;
  const slides = $$('img', slider);
  let active = 0;
  slides.forEach((slide, index) => slide.hidden = index !== 0);
  setInterval(() => {
    slides[active].hidden = true;
    active = (active + 1) % slides.length;
    slides[active].hidden = false;
  }, 7000);
}

function bindTagStudioSlider() {
  const slider = $('[data-tag-studio-slider]');
  if (!slider) return;
  const slides = $$('[data-tag-slide]', slider);
  const dots = $$('[data-tag-slider-dot]', slider);
  const status = $('[data-tag-slider-status]', slider);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let timer;
  let paused = false;

  const show = (next, announce = true) => {
    active = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const current = index === active;
      slide.classList.toggle('is-active', current);
      slide.setAttribute('aria-hidden', String(!current));
    });
    dots.forEach((dot, index) => {
      const current = index === active;
      dot.classList.toggle('is-active', current);
      if (current) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (announce && status) status.textContent = `Foto ${active + 1} de ${slides.length}`;
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = undefined;
  };
  const start = () => {
    stop();
    if (paused || reducedMotion.matches || slides.length < 2) return;
    timer = window.setInterval(() => show(active + 1, false), 6000);
  };
  const choose = (next) => {
    show(next);
    start();
  };

  $('[data-tag-slider-prev]', slider)?.addEventListener('click', () => choose(active - 1));
  $('[data-tag-slider-next]', slider)?.addEventListener('click', () => choose(active + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => choose(Number(dot.dataset.tagSliderDot))));
  slider.addEventListener('mouseenter', () => { paused = true; stop(); });
  slider.addEventListener('mouseleave', () => { paused = false; start(); });
  slider.addEventListener('focusin', () => { paused = true; stop(); });
  slider.addEventListener('focusout', (event) => {
    if (slider.contains(event.relatedTarget)) return;
    paused = false;
    start();
  });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  reducedMotion.addEventListener?.('change', start);
  show(0, false);
  start();
}

function drawQr(text) {
  const canvas = $('[data-qr-canvas]');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 29;
  const cell = canvas.width / size;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 0;
  for (const ch of text) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const finder = (x, y) => {
    ctx.fillStyle = '#111318';
    ctx.fillRect(x * cell, y * cell, 7 * cell, 7 * cell);
    ctx.fillStyle = '#fff';
    ctx.fillRect((x + 1) * cell, (y + 1) * cell, 5 * cell, 5 * cell);
    ctx.fillStyle = '#111318';
    ctx.fillRect((x + 2) * cell, (y + 2) * cell, 3 * cell, 3 * cell);
  };
  finder(1, 1); finder(21, 1); finder(1, 21);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x < 9 && y < 9) || (x > 19 && y < 9) || (x < 9 && y > 19)) continue;
      seed = (1664525 * seed + 1013904223) >>> 0;
      if (seed & 1) {
        ctx.fillStyle = '#111318';
        ctx.fillRect(x * cell, y * cell, Math.ceil(cell), Math.ceil(cell));
      }
    }
  }
}

function bindQr() {
  const input = $('[data-qr-url]');
  if (!input) return;
  const update = () => drawQr(input.value.trim() || 'https://dcreationspr.com');
  input.addEventListener('input', update);
  update();
}

function builderValue(root, name) {
  const checked = root.querySelector(`input[name="${name}"]:checked`);
  if (checked) return checked.value;
  const field = root.querySelector(`[data-summary-source="${name}"]`);
  return field?.value?.trim() || '';
}

function bindProductBuilders() {
  $$('[data-product-builder]').forEach((root) => {
    const update = () => {
      $$('[data-summary]', root).forEach((output) => {
        const value = builderValue(root, output.dataset.summary);
        output.textContent = value || 'Por definir';
      });
      const width = $('#sticker-width', root)?.value;
      const height = $('#sticker-height', root)?.value;
      const combined = $('[data-summary-combined="sticker-size"]', root);
      if (combined && width && height) combined.textContent = `${width}″ × ${height}″`;
      const completed = $$('input:checked,textarea:not(:placeholder-shown),input:not([type="radio"]):not([type="file"])', root).length;
      const progress = $('[data-progress]', root);
      if (progress) progress.textContent = String(Math.min(4, Math.max(1, Math.ceil(completed / 3))));
    };
    root.addEventListener('input', update);
    root.addEventListener('change', update);
    $('[data-prototype-submit]', root)?.addEventListener('click', () => {
      const status = $('[data-prototype-status]', root);
      if (!status) return;
      status.textContent = 'Prototipo listo: en la versión final, esta información se enviará a D Creations para revisión.';
    });
    update();
  });
}

function bindTagStudio() {
  const root = $('#tag-builder');
  if (!root) return;
  const preview = $('[data-tag-preview]', root);
  const text = $('[data-tag-text]', root);
  const subtitle = $('[data-tag-subtitle]', root);
  const outputText = $('[data-tag-preview-text]', root);
  const outputSubtitle = $('[data-tag-preview-subtitle]', root);
  const outputType = $('[data-tag-preview-type]', root);
  const count = $('[data-tag-count]', root);

  const update = () => {
    const type = selectedValue('tag-type', root) || 'Nombre';
    const color = $('input[name="tag-color"]:checked', root);
    outputText.textContent = text.value.trim() || (type === 'Logo' ? 'Tu logo' : type === 'Tema' ? 'Tu tema' : 'Tu nombre');
    outputSubtitle.textContent = subtitle.value.trim() || '3D TAG';
    outputType.textContent = type;
    count.textContent = String(text.value.length);
    preview.style.setProperty('--tag-bg', color?.dataset.bg || '#7045d8');
    preview.style.setProperty('--tag-fg', color?.dataset.fg || '#ffffff');
  };

  root.addEventListener('input', update);
  root.addEventListener('change', update);
  $$('[data-tag-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('[data-tag-preset]').forEach((item) => item.classList.toggle('is-active', item === button));
      const option = $(`input[name="tag-type"][value="${button.dataset.tagPreset}"]`, root);
      if (option) {
        option.checked = true;
        option.dispatchEvent(new Event('change', { bubbles: true }));
      }
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  update();
}

function bindPrintReadiness() {
  const root = $('#project-builder');
  if (!root) return;
  const score = $('[data-readiness-score]', root);
  const bar = $('[data-readiness-bar]', root);
  const next = $('[data-next-step]', root);
  const checks = {
    purpose: () => $('[data-readiness-input="purpose"]', root)?.value.trim().length > 8,
    size: () => Boolean($('[data-readiness-input="size"]', root)?.value.trim()),
    file: () => Boolean($('[data-readiness-file]', root)?.files?.length),
    quantity: () => Number($('[data-readiness-input="quantity"]', root)?.value) > 0
  };
  const prompts = {
    purpose: 'Cuéntanos qué debe hacer o representar la pieza.',
    size: 'Añade una medida aproximada.',
    file: 'Sube una foto, sketch o archivo 3D.',
    quantity: 'Confirma cuántas piezas necesitas.'
  };
  const update = () => {
    const ready = Object.entries(checks).filter(([, test]) => test()).map(([key]) => key);
    const percent = ready.length * 25;
    score.textContent = `${percent}%`;
    bar.style.width = `${percent}%`;
    Object.keys(checks).forEach((key) => $(`[data-ready="${key}"]`, root)?.classList.toggle('is-ready', ready.includes(key)));
    const missing = Object.keys(checks).find((key) => !ready.includes(key));
    next.textContent = missing ? prompts[missing] : 'Tu brief tiene lo esencial para una evaluación inicial.';
  };
  root.addEventListener('input', update);
  root.addEventListener('change', update);
  $$('[data-print-route]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('[data-print-route]').forEach((item) => item.classList.toggle('is-active', item === button));
      const routeValues = {
        idea: 'Necesito diseño desde cero',
        model: 'Tengo archivo listo',
        modify: 'Necesito modificar un modelo'
      };
      const option = $(`input[name="design-state"][value="${routeValues[button.dataset.printRoute]}"]`, root);
      if (option) {
        option.checked = true;
        option.dispatchEvent(new Event('change', { bubbles: true }));
      }
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  update();
}

function bindStickerPreview() {
  const root = $('#sticker-builder');
  if (!root) return;
  const input = $('[data-file-input]', root);
  const preview = $('.sticker-shape-preview', root);
  const card = $('.sticker-preview-card', root);
  const formatOutput = $('[data-sticker-format-preview]', root);
  const finishOutput = $('[data-sticker-finish-preview]', root);
  const health = $('[data-art-health]', root);
  const dimensions = $('[data-art-dimensions]', root);
  const width = $('#sticker-width', root);
  const height = $('#sticker-height', root);

  const update = () => {
    const format = selectedValue('sticker-format', root) || 'Die-cut';
    const finish = selectedValue('sticker-finish', root) || 'Matte';
    card.classList.toggle('is-kiss-cut', format === 'Kiss-cut');
    card.classList.toggle('is-sheet', format === 'Hoja de Stickers');
    card.classList.toggle('finish-glossy', finish === 'Glossy');
    card.classList.toggle('finish-reflective', finish === 'Reflective');
    formatOutput.textContent = format;
    finishOutput.textContent = finish;
  };
  root.addEventListener('change', update);

  input?.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      health.textContent = 'Sube tu arte';
      dimensions.textContent = 'PNG transparente recomendado';
      return;
    }
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.alt = 'Arte seleccionado para el Sticker';
    image.onload = () => {
      dimensions.textContent = `${image.naturalWidth} × ${image.naturalHeight} px`;
      health.textContent = 'Imagen cargada';
      URL.revokeObjectURL(url);
    };
    image.src = url;
    preview.replaceChildren(image);
  });

  $$('[data-sticker-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('[data-sticker-preset]').forEach((item) => item.classList.toggle('is-active', item === button));
      const option = $(`input[name="sticker-format"][value="${button.dataset.stickerPreset}"]`, root);
      if (option) {
        option.checked = true;
        option.dispatchEvent(new Event('change', { bubbles: true }));
      }
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  $$('[data-sticker-size]', root).forEach((button) => {
    button.addEventListener('click', () => {
      $$('[data-sticker-size]', root).forEach((item) => item.classList.toggle('is-active', item === button));
      if (button.dataset.stickerSize !== 'custom') {
        const [nextWidth, nextHeight] = button.dataset.stickerSize.split(',');
        width.value = nextWidth;
        height.value = nextHeight;
        width.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        width.focus();
      }
    });
  });
  update();
}

bindFilePreviews();
bindLabelsConfigurator();
bindNfcSlider();
bindTagStudioSlider();
bindQr();
bindProductBuilders();
bindTagStudio();
bindPrintReadiness();
bindStickerPreview();
