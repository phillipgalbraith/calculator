# Calculator
I made a JavaScript Calculator that works with multiple arithmethic
operations (not order of operations).


## Deployment
It is deployed on Vercel at:
https://calculator-one-eosin.vercel.app/

- Pull requests trigger a preview deployment
- - the preview deployment is noted in the comments on GitHub PR

## QA Wolf
I added tests with QAWolf. Triggered by GitHub Pull Requests:

Tests run on to all deployment types
applies to all branches

I am going to send an http post request to QA Wolf to trigger 
a test for the vercel deployment:

curl -H "Authorization: qawolf_c2c2c7503d6a4684a2419d5757bcc312" -H "Content-Type: application/json" https://app.qawolf.com/api/webhooks/deploy_success -d '{"branch": "feature/new-note", "deployment_type": "preview", "deployment_url": "//from the vercel preview on GitHub//"}'