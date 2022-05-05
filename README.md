# AL_Ma
# [automated testing with cypress.io](https://www.cypress.io)

## description

Alma shop testing

## mandatory

[node.js](https://nodejs.org/en/)

## installation

from bash console, clone the repository

```bash
git clone
```

from bash console, install the dependencies

```bash
npm i
```

from bash console, open cypress

```bash
npx cypress open
```
front end test:
from cypress dashboard, open the script "shopping.js"

back end test:
from cypress dashboard, open the script "api.js"


Ansewrs:

FRONT END:
1-Tool choice:
    I used cypress because it's a modern and strong tool for web applications test automation.
2-If i had more time i would first studied the application's behavour to well understand it then identify more
  test scenarios
3-I think you have missed in specification the step where we should unchek the checkbox"Fragments"
, I noticed that in holding it checked we can't reach the page 'https://checkout.sandbox.getalma.eu' and the paiement statements,
are showed bellow but not in a new page

API:

1- What i have tested:
I tried to test the 2 ways of using the API: 
Way 1:Requetes Scénario: Sending in the body the queries attribute,
the queries attribute is used to specify the Alma products to be evaluated, 
specifying their characteristics for each query.
the API then responds with the eligibility result for each request, 
and exclusively for the requests sent.
Way 2:Découverte Scénario: without providing a request, in the body we need just to send the amount of the payement, 
,the API then responds with all eligible and only the eligible Alma products 
for the given amount and optionally the specified origin, the country of the billing or delivery address
2- What I haven't tested: the non passed scnéarios because i need to learn more about the API
3- The tool I used : I used cypress in order to harmonize the test tools.
using the the same tool for front end and back end automation, is benefic,  especially since cypress is a powerful tool for both
4- What i would have done differently if i had more time: Deepen the test scenarios,
including passing scenarios and non-passing scenarios

