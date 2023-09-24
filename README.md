# TTT MAIL API

This is a mail server which is meant to service all take2tech.ca clients.

- current provider is smtp2go.com
- found on barebones server
ss
## to deploy production
- git push all changes
- ssh ####@##.##.##.### -p 222
- cd ..
- cd ..
- cd apps/ttt/mail.take2tech.ca
- sudo git reset --hard
- sudo git pull
- check that .env port is 4000
- sudo system ctl restart nginx
 