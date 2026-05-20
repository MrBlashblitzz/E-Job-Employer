function postJob() {
  return `
  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">Post a Job</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">Fill out the form below. Your posting will be reviewed by PESO before it goes live.</p>
  </div>

  <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:28px;">

    <!-- Job Title -->
    <div class="mb-5">
      <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Job Title <span style="color:var(--red)">*</span></label>
      <input type="text" class="pj-field" placeholder="e.g. Production Operator, HR Assistant"/>
    </div>

    <!-- Job Description -->
    <div class="mb-5">
      <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Job Description <span style="color:var(--red)">*</span></label>
      <textarea class="pj-field" rows="4" placeholder="Describe the role, responsibilities, and expectations..."></textarea>
    </div>

    <!-- Qualifications -->
    <div class="mb-5">
      <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Qualifications Required <span style="color:var(--red)">*</span></label>
      <textarea class="pj-field" rows="3" placeholder="e.g. Bachelor's degree in any field, at least 1 year experience..."></textarea>
    </div>

    <!-- Row: Salary + Vacancies -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
      <div>
        <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Salary Range (PHP/month) <span style="color:var(--red)">*</span></label>
        <div class="flex items-center gap-2">
          <input type="number" class="pj-field" placeholder="Min" style="width:100%"/>
          <span class="text-xs" style="color:var(--muted)">to</span>
          <input type="number" class="pj-field" placeholder="Max" style="width:100%"/>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Number of Vacancies <span style="color:var(--red)">*</span></label>
        <input type="number" class="pj-field" placeholder="e.g. 3" min="1"/>
      </div>
    </div>

    <!-- Row: Employment Type + Work Location -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
      <div>
        <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Employment Type <span style="color:var(--red)">*</span></label>
        <select class="pj-field pj-select">
          <option value="" disabled selected>Select type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contractual</option>
          <option>Project-based</option>
          <option>Internship / OJT</option>
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Work Location <span style="color:var(--red)">*</span></label>
        <input type="text" class="pj-field" placeholder="e.g. Brgy. Balibago, Santa Rosa City"/>
      </div>
    </div>

    <!-- Application Deadline -->
    <div class="mb-5">
      <label class="block text-xs font-semibold mb-1.5" style="color:var(--text)">Application Deadline <span style="color:var(--red)">*</span></label>
      <input type="date" class="pj-field" style="max-width:240px;"/>
    </div>

    <!-- Note -->
    <div class="flex items-start gap-2 rounded-lg px-4 py-3 mb-6" style="background:#FEF9E7; border:1px solid #F9E79F;">
      <svg class="w-4 h-4 shrink-0 mt-0.5" style="color:#B7950B" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <p class="text-xs" style="color:#7D6608;">Your job posting will be set to <strong>Pending</strong> status and must be approved by PESO before it becomes visible to job seekers. This is in compliance with R.A. 8759.</p>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-3">
      <button class="pj-btn-primary" onclick="submitJob()">Submit for PESO Approval</button>
      <button class="pj-btn-ghost">Save as Draft</button>
    </div>

  </div>
  `;
}

function submitJob() {
  const toast = document.createElement('div');
  toast.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:3px;">
      <span style="font-weight:600;">✓ Job posting submitted for PESO approval</span>
      <span style="font-size:0.75rem;opacity:0.85;">Your posting will be reviewed before it goes live. You'll be notified once approved.</span>
    </div>`;
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#B7950B;color:#fff;padding:12px 18px;border-radius:8px;font-size:0.82rem;font-weight:500;z-index:9999;font-family:DM Sans,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:320px;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}