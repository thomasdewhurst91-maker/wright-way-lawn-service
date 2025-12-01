# Deploying to Netlify

Your Wright Way Lawn Service website is now ready for static hosting on Netlify!

## Quick Deploy to Netlify

1. **Push to GitHub** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Wright Way website ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`:
     - Build command: `npx vite build`
     - Publish directory: `dist/public`
   - Click "Deploy site"

That's it! Your site will be live at a netlify.app URL in 2-3 minutes.

## Alternative: Build Locally & Drag-and-Drop

If you don't want to connect GitHub:

```bash
# Build the site locally
npx vite build

# This creates dist/public folder with your static site
```

Then go to Netlify → "Sites" → "Add new site" → "Deploy manually" and drag the `dist/public` folder.

## What's Been Simplified

✅ **No backend server needed** - Contact form uses Netlify Forms (free)
✅ **All real photos** - Your actual work from Orange, NSW  
✅ **Static hosting** - Fast, cheap, and simple
✅ **One-click deploys** - Push to GitHub and it auto-deploys

## Contact Form Setup

After deployment:
1. Go to your Netlify dashboard
2. Click "Forms" in the sidebar  
3. You'll see submissions from your contact form
4. Set up email notifications in Form settings

## Custom Domain (Optional)

In Netlify dashboard:
1. Go to "Domain settings"
2. Add your custom domain
3. Follow DNS instructions

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Contact form not working? Make sure the form has `data-netlify="true"` attribute (already done!)
