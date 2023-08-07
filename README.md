# TTT MAIL API

This is a mail server which is meant to service all take2tech.ca clients.

- current provider is smtp2go.com
- found on barebones server
ss
## to deploy production
- git push all changes
- ssh tmurv@66.85.30.155 -p 222
- cd apps/ttt/tttmailapi
- git reset --hard
- git pull
- check that config.env port is 7050, linux command is "cat config.env"
