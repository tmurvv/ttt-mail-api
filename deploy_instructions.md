## to deploy production
- git push all changes
- `ssh tmurv@66.85.30.155 -p 222`
- `cd ..`
- `cd ..`
- `cd apps/ttt/mail.take2tech.ca`
- `sudo git reset --hard`
- `sudo git pull`
- check that .env port is 4000
- `sudo systemctl restart nginx` (should this be restart pm2 instance?)