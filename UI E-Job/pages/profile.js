function profile() {
  return `
  <div class="mb-6">
    <h2 class="text-xl font-semibold" style="color:var(--text)">My Profile</h2>
    <p class="text-sm mt-0.5" style="color:var(--muted)">Manage your company information and account details.</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

    <!-- LEFT: Company Card -->
    <div class="lg:col-span-1 flex flex-col gap-5">

      <!-- Company identity card -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; overflow:hidden;">
        <!-- Banner -->
        <div style="height:80px; background: linear-gradient(135deg, #C0392B 0%, #2C3E50 100%);"></div>
        <!-- Logo + name -->
        <div style="padding:0 20px 20px; margin-top:-28px;">
          <div style="width:56px; height:56px; border-radius:12px; background:#fff; border:2px solid var(--border); display:flex; align-items:center; justify-content:center; margin-bottom:10px; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <span style="font-size:1.3rem; font-weight:700; color:var(--red); font-family:'DM Serif Display',serif;">SR</span>
          </div>
          <p class="font-semibold text-sm" style="color:var(--text)">Sta. Rosa Manufacturing Inc.</p>
          <p class="text-xs mt-0.5" style="color:var(--muted)">Manufacturing</p>
          <div class="flex items-center gap-1.5 mt-3">
            <span style="width:7px;height:7px;border-radius:50%;background:#27AE60;display:inline-block;"></span>
            <span class="text-xs font-medium" style="color:#27AE60">Verified by PESO</span>
          </div>
        </div>
      </div>

      <!-- Quick stats -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:18px 20px;">
        <p class="text-xs font-semibold uppercase tracking-wider mb-4" style="color:var(--muted)">Account Overview</p>
        <div class="flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <span class="text-xs" style="color:var(--muted)">Active Postings</span>
            <span class="text-sm font-semibold" style="color:var(--text)">8</span>
          </div>
          <div style="height:1px; background:var(--border)"></div>
          <div class="flex justify-between items-center">
            <span class="text-xs" style="color:var(--muted)">Total Applicants</span>
            <span class="text-sm font-semibold" style="color:var(--text)">124</span>
          </div>
          <div style="height:1px; background:var(--border)"></div>
          <div class="flex justify-between items-center">
            <span class="text-xs" style="color:var(--muted)">Hired This Month</span>
            <span class="text-sm font-semibold" style="color:var(--text)">17</span>
          </div>
          <div style="height:1px; background:var(--border)"></div>
          <div class="flex justify-between items-center">
            <span class="text-xs" style="color:var(--muted)">Member Since</span>
            <span class="text-sm font-semibold" style="color:var(--text)">Jan 2026</span>
          </div>
        </div>
      </div>

    </div>

    <!-- RIGHT: Edit form -->
    <div class="lg:col-span-2 flex flex-col gap-5">

      <!-- Company Information -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:24px;">
        <div class="flex items-center justify-between mb-5">
          <div>
            <p class="text-sm font-semibold" style="color:var(--text)">Company Information</p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">Update your business details.</p>
          </div>
          <button class="pr-btn" onclick="toggleEdit('companyForm', this)">Edit</button>
        </div>

        <div id="companyForm" class="flex flex-col gap-4">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="pr-label">Company / Business Name</label>
              <input type="text" class="pr-field" value="Sta. Rosa Manufacturing Inc." disabled/>
            </div>
            <div>
              <label class="pr-label">Industry</label>
              <select class="pr-field pr-select" disabled>
                <option selected>Manufacturing</option>
                <option>Retail / Trading</option>
                <option>IT / BPO</option>
                <option>Food &amp; Beverage</option>
                <option>Construction</option>
                <option>Healthcare</option>
              </select>
            </div>
          </div>

          <div>
            <label class="pr-label">Business Address</label>
            <input type="text" class="pr-field" value="Brgy. Balibago, Santa Rosa City, Laguna" disabled/>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="pr-label">TIN / Business Registration No.</label>
              <input type="text" class="pr-field" value="123-456-789-000" disabled/>
            </div>
            <div>
              <label class="pr-label">Company Website</label>
              <input type="text" class="pr-field" value="www.starosamfg.com.ph" disabled/>
            </div>
          </div>

          <div id="companyActions" class="hidden flex gap-2 mt-1">
            <button class="pr-btn-primary" onclick="saveSection('companyForm', this)">Save Changes</button>
            <button class="pr-btn-ghost" onclick="cancelEdit('companyForm')">Cancel</button>
          </div>

        </div>
      </div>

      <!-- Contact Person -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:24px;">
        <div class="flex items-center justify-between mb-5">
          <div>
            <p class="text-sm font-semibold" style="color:var(--text)">Contact Person</p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">Primary point of contact for PESO communications.</p>
          </div>
          <button class="pr-btn" onclick="toggleEdit('contactForm', this)">Edit</button>
        </div>

        <div id="contactForm" class="flex flex-col gap-4">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="pr-label">Full Name</label>
              <input type="text" class="pr-field" value="Jose Reyes" disabled/>
            </div>
            <div>
              <label class="pr-label">Position / Designation</label>
              <input type="text" class="pr-field" value="HR Manager" disabled/>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="pr-label">Email Address</label>
              <input type="email" class="pr-field" value="jreyes@starosamfg.com.ph" disabled/>
            </div>
            <div>
              <label class="pr-label">Contact Number</label>
              <input type="tel" class="pr-field" value="09171234567" disabled/>
            </div>
          </div>

          <div id="contactActions" class="hidden flex gap-2 mt-1">
            <button class="pr-btn-primary" onclick="saveSection('contactForm', this)">Save Changes</button>
            <button class="pr-btn-ghost" onclick="cancelEdit('contactForm')">Cancel</button>
          </div>

        </div>
      </div>

      <!-- Account Security -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:24px;">
        <div class="flex items-center justify-between mb-5">
          <div>
            <p class="text-sm font-semibold" style="color:var(--text)">Account Security</p>
            <p class="text-xs mt-0.5" style="color:var(--muted)">Change your password.</p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div>
            <label class="pr-label">Current Password</label>
            <input type="password" class="pr-field" placeholder="Enter current password"/>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="pr-label">New Password</label>
              <input type="password" class="pr-field" placeholder="Min. 8 characters"/>
            </div>
            <div>
              <label class="pr-label">Confirm New Password</label>
              <input type="password" class="pr-field" placeholder="Re-enter new password"/>
            </div>
          </div>
          <div>
            <button class="pr-btn-primary" style="width:auto; padding:0.6rem 1.4rem;">Update Password</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  `;
}

function toggleEdit(formId, btn) {
  const form = document.getElementById(formId);
  const actionsId = formId.replace('Form', 'Actions');
  const actions = document.getElementById(actionsId);
  form.querySelectorAll('input, select').forEach(f => f.disabled = false);
  actions.classList.remove('hidden');
  btn.style.display = 'none';
}

function cancelEdit(formId) {
  const form = document.getElementById(formId);
  const actionsId = formId.replace('Form', 'Actions');
  const actions = document.getElementById(actionsId);
  form.querySelectorAll('input, select').forEach(f => f.disabled = true);
  actions.classList.add('hidden');
  // Show edit button again
  form.closest('div[style]').querySelector('.pr-btn').style.display = '';
}

function saveSection(formId, btn) {
  cancelEdit(formId);

  const isCompany = formId === 'companyForm';

  const toast = document.createElement('div');

  if (isCompany) {
    toast.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:3px;">
        <span style="font-weight:600;">✓ Changes submitted for PESO review</span>
        <span style="font-size:0.75rem;opacity:0.85;">Company info updates require PESO approval before taking effect.</span>
      </div>`;
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#B7950B;color:#fff;padding:12px 18px;border-radius:8px;font-size:0.82rem;font-weight:500;z-index:9999;font-family:DM Sans,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.15);max-width:320px;';
  } else {
    toast.innerHTML = `<span style="font-weight:600;">✓ Changes saved successfully.</span>`;
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#27AE60;color:#fff;padding:10px 18px;border-radius:8px;font-size:0.82rem;font-weight:500;z-index:9999;font-family:DM Sans,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
  }

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}