function accountVerification() {
  return `
  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">Account Verification</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">Submit the required documents for PESO verification. All files must be in PDF format.</p>
  </div>

  <!-- Verification status banner -->
  <div class="flex items-center gap-3 rounded-12 px-5 py-4 mb-6" style="background:#FEF9E7; border:1px solid #F9E79F; border-radius:12px;">
    <svg class="w-5 h-5 shrink-0" style="color:#B7950B" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    <div>
      <p class="text-sm font-semibold" style="color:#7D6608">Verification Pending</p>
      <p class="text-xs mt-0.5" style="color:#9A7D0A">Submit all required documents below. PESO will review and verify your account within 3–5 business days.</p>
    </div>
  </div>

  <!-- Documents grid -->
  <div class="flex flex-col gap-4 mb-6">

    <!-- BIR Certificate of Registration -->
    <div class="av-doc-card" id="doc-bir">
      <div class="flex items-start gap-4">
        <div class="av-doc-icon" style="background:#EBF5FB;">
          <svg class="w-5 h-5" style="color:#1A5276" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <p class="text-sm font-semibold" style="color:var(--text)">BIR Certificate of Registration</p>
            <span class="av-required">Required</span>
          </div>
          <p class="text-xs mb-3" style="color:var(--muted)">BIR Form 2303 — proof that your business is registered with the Bureau of Internal Revenue. PDF only · Max 5MB</p>
          <div class="av-dropzone" id="drop-bir" ondragover="avDragOver(event)" ondragleave="avDragLeave(event)" ondrop="avDrop(event,'bir')" onclick="document.getElementById('file-bir').click()">
            <svg class="w-6 h-6 mb-2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p class="text-xs font-medium" style="color:var(--text)">Drop file here or <span style="color:var(--red)">browse</span></p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">PDF only · Max 5MB</p>
          </div>
          <input type="file" id="file-bir" accept=".pdf" class="hidden" onchange="avFileSelected(this,'bir')"/>
          <div id="preview-bir" class="av-file-preview hidden"></div>
          <div id="error-bir" class="av-error hidden"></div>
        </div>
      </div>
    </div>

    <!-- DTI / SEC Registration -->
    <div class="av-doc-card" id="doc-dti">
      <div class="flex items-start gap-4">
        <div class="av-doc-icon" style="background:#EAFAF1;">
          <svg class="w-5 h-5" style="color:#1E8449" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <p class="text-sm font-semibold" style="color:var(--text)">DTI / SEC Certificate of Registration</p>
            <span class="av-required">Required</span>
          </div>
          <p class="text-xs mb-3" style="color:var(--muted)">DTI for sole proprietorships or SEC for corporations/partnerships — proof of business registration. PDF only · Max 5MB</p>
          <div class="av-dropzone" id="drop-dti" ondragover="avDragOver(event)" ondragleave="avDragLeave(event)" ondrop="avDrop(event,'dti')" onclick="document.getElementById('file-dti').click()">
            <svg class="w-6 h-6 mb-2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p class="text-xs font-medium" style="color:var(--text)">Drop file here or <span style="color:var(--red)">browse</span></p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">PDF only · Max 5MB</p>
          </div>
          <input type="file" id="file-dti" accept=".pdf" class="hidden" onchange="avFileSelected(this,'dti')"/>
          <div id="preview-dti" class="av-file-preview hidden"></div>
          <div id="error-dti" class="av-error hidden"></div>
        </div>
      </div>
    </div>

    <!-- Mayor's Permit / Business Permit -->
    <div class="av-doc-card" id="doc-permit">
      <div class="flex items-start gap-4">
        <div class="av-doc-icon" style="background:#F5EEF8;">
          <svg class="w-5 h-5" style="color:#6C3483" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <p class="text-sm font-semibold" style="color:var(--text)">Mayor's Permit / Business Permit</p>
            <span class="av-required">Required</span>
          </div>
          <p class="text-xs mb-3" style="color:var(--muted)">Current year business permit issued by the City Government of Santa Rosa. PDF only · Max 5MB</p>
          <div class="av-dropzone" id="drop-permit" ondragover="avDragOver(event)" ondragleave="avDragLeave(event)" ondrop="avDrop(event,'permit')" onclick="document.getElementById('file-permit').click()">
            <svg class="w-6 h-6 mb-2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p class="text-xs font-medium" style="color:var(--text)">Drop file here or <span style="color:var(--red)">browse</span></p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">PDF only · Max 5MB</p>
          </div>
          <input type="file" id="file-permit" accept=".pdf" class="hidden" onchange="avFileSelected(this,'permit')"/>
          <div id="preview-permit" class="av-file-preview hidden"></div>
          <div id="error-permit" class="av-error hidden"></div>
        </div>
      </div>
    </div>

    <!-- Company ID / Authorization Letter -->
    <div class="av-doc-card" id="doc-authid">
      <div class="flex items-start gap-4">
        <div class="av-doc-icon" style="background:#FEF9E7;">
          <svg class="w-5 h-5" style="color:#B7950B" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <p class="text-sm font-semibold" style="color:var(--text)">Authorization Letter / Company ID</p>
            <span class="av-required">Required</span>
          </div>
          <p class="text-xs mb-3" style="color:var(--muted)">Authorization letter signed by the owner or HR head confirming the account registrant is authorized to post on behalf of the company. PDF only · Max 5MB</p>
          <div class="av-dropzone" id="drop-authid" ondragover="avDragOver(event)" ondragleave="avDragLeave(event)" ondrop="avDrop(event,'authid')" onclick="document.getElementById('file-authid').click()">
            <svg class="w-6 h-6 mb-2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p class="text-xs font-medium" style="color:var(--text)">Drop file here or <span style="color:var(--red)">browse</span></p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">PDF only · Max 5MB</p>
          </div>
          <input type="file" id="file-authid" accept=".pdf" class="hidden" onchange="avFileSelected(this,'authid')"/>
          <div id="preview-authid" class="av-file-preview hidden"></div>
          <div id="error-authid" class="av-error hidden"></div>
        </div>
      </div>
    </div>

    <!-- DOLE Job Vacancy Form (Optional) -->
    <div class="av-doc-card" id="doc-jvf">
      <div class="flex items-start gap-4">
        <div class="av-doc-icon" style="background:#FADBD8;">
          <svg class="w-5 h-5" style="color:var(--red)" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <p class="text-sm font-semibold" style="color:var(--text)">DOLE Job Vacancy Form (JVF)</p>
            <span class="av-optional">Optional</span>
          </div>
          <p class="text-xs mb-3" style="color:var(--muted)">If available, attach the accomplished DOLE JVF to expedite the approval of your job postings. PDF only · Max 5MB</p>
          <div class="av-dropzone" id="drop-jvf" ondragover="avDragOver(event)" ondragleave="avDragLeave(event)" ondrop="avDrop(event,'jvf')" onclick="document.getElementById('file-jvf').click()">
            <svg class="w-6 h-6 mb-2" style="color:var(--muted)" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p class="text-xs font-medium" style="color:var(--text)">Drop file here or <span style="color:var(--red)">browse</span></p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">PDF only · Max 5MB</p>
          </div>
          <input type="file" id="file-jvf" accept=".pdf" class="hidden" onchange="avFileSelected(this,'jvf')"/>
          <div id="preview-jvf" class="av-file-preview hidden"></div>
          <div id="error-jvf" class="av-error hidden"></div>
        </div>
      </div>
    </div>

  </div>

  <!-- Submit button -->
  <div class="flex items-center gap-4">
    <button onclick="avSubmit()" style="padding:0.68rem 1.6rem;background:var(--red);color:#fff;font-weight:600;font-size:0.875rem;border-radius:8px;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;">Submit Documents</button>
    <p class="text-xs" style="color:var(--muted)">Make sure all required documents are attached before submitting.</p>
  </div>
  `;
}

function avDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('dragover');
}

function avDragLeave(e) {
  e.currentTarget.classList.remove('dragover');
}

function avDrop(e, docId) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) avValidateAndPreview(file, docId);
}

function avFileSelected(input, docId) {
  const file = input.files[0];
  if (file) avValidateAndPreview(file, docId);
}

function avValidateAndPreview(file, docId) {
  const errorEl   = document.getElementById('error-' + docId);
  const previewEl = document.getElementById('preview-' + docId);
  const dropEl    = document.getElementById('drop-' + docId);

  // Reset
  errorEl.classList.add('hidden');
  previewEl.classList.add('hidden');

  // Validate type
  if (file.type !== 'application/pdf') {
    errorEl.textContent = '✕ Invalid file type. Please upload a PDF file only.';
    errorEl.classList.remove('hidden');
    return;
  }

  // Validate size (5MB = 5 * 1024 * 1024)
  if (file.size < 5 * 1024 * 1024) {
    errorEl.textContent = '✕ File size must be at least 5MB.';
    errorEl.classList.remove('hidden');
    return;
  }

  // Valid — show preview
  const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
  previewEl.innerHTML = `
    <svg class="w-5 h-5 shrink-0" style="color:#1E8449" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    <div class="flex-1 min-w-0">
      <p class="text-xs font-semibold" style="color:#1E8449; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${file.name}</p>
      <p class="text-xs" style="color:#27AE60">${sizeMB} MB · PDF</p>
    </div>
    <button onclick="avRemoveFile('${docId}')" style="background:none;border:none;cursor:pointer;color:#1E8449;font-size:1rem;padding:0;line-height:1;">✕</button>
  `;
  previewEl.classList.remove('hidden');
  dropEl.style.display = 'none';
}

function avRemoveFile(docId) {
  document.getElementById('file-' + docId).value = '';
  document.getElementById('preview-' + docId).classList.add('hidden');
  document.getElementById('error-' + docId).classList.add('hidden');
  document.getElementById('drop-' + docId).style.display = '';
}

function avSubmit() {
  const required = ['bir', 'dti', 'permit', 'authid'];
  let allValid = true;

  required.forEach(docId => {
    const preview = document.getElementById('preview-' + docId);
    const error   = document.getElementById('error-' + docId);
    if (preview.classList.contains('hidden')) {
      error.textContent = '✕ This document is required.';
      error.classList.remove('hidden');
      allValid = false;
    }
  });

  if (!allValid) return;

  // Success toast
  const toast = document.createElement('div');
  toast.innerHTML = '✓ Documents submitted. PESO will review within 3–5 business days.';
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#27AE60;color:#fff;padding:10px 18px;border-radius:8px;font-size:0.82rem;font-weight:500;z-index:9999;font-family:DM Sans,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:320px;line-height:1.5;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
