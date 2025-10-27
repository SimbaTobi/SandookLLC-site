# Sandook LLC — static site

A lightweight, fast company site. Built with vanilla HTML/CSS so you can host on **GitHub Pages**.

## Quick start
1. Upload all files to your GitHub repo (root, not inside a subfolder).
2. In **Settings → Pages**, select **Deploy from branch**, Source: **main**, Folder: **/** (root).
3. (Custom domain) Add your domain under **Pages → Custom domain**.
4. Set DNS at your registrar (GoDaddy):
   - **A records** for apex (sandookllc.com) → GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME** for **www** → `<YOUR_GITHUB_USERNAME>.github.io`
5. Wait for the TLS certificate to provision, then enable **Enforce HTTPS** in Pages.

### Edit content
- `index.html` — content and sections
- `styles.css` — colors/branding
- `script.js` — minor behaviors
- `assets/logo.svg` — update with your logo

### Contact email
The button links to **hello@rushranks.com** — change it to your preferred address in `index.html`.
