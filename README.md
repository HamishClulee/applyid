# applyid

## Setup

From root => 

- `npm i` or `yarn`
- Add a file named `.env`
- Add an entry into `.env` with the value `VUE_APP_API_TOKEN=get_token_value_from_zip_in_email`

## Run

`npm run serve` or `yarn serve`

## Build

`npm run build` or `yarn build`

## Hosted At

[Netlify](https://vigilant-nobel-9de342.netlify.app)

## Write Up

### Things I Would Do If I Had More Time :)

Build this an OAuth app.

Make it responsive. Currently only really works down to around 980px screen widths.
Standard production processes: unit tests, e2e tests, more types, cross browser testing (currently only tested on Chrome@latest - debian)

Add more detail to the search result items, deep linking would be fun, and make use of the api links returned from the top level HTTP calls, 'waterfall' api calls to try and coin a term, I guess.

There was some mention in the GitHub docs of [text match metadata](https://developer.github.com/v3/search/#text-match-metadata) which seemed like you could do some very cool UI stuff with the topic results... maybe a an additional search bar hovering on top of each item to allow for searching within results. Or improving the existing search bar by adding a drop down with categories, similar to [this](https://netograph.io) which I wrote while working at Netograph.

Adding another dialog to allow for more or less results per 'page' and then course adding pagination to the results dialog.

Lots more style polish, but thats really time consuming, the last 5% takes 95% of the time, or whatever the 'rule' is.

### Some Caveats

A lot of the components here had already been completed in a side project of mine; Hue. Basically a lot of the code seen here is 'copypasta and refactor' from other existing projects of mine.

Unsure if I actually needed typescript here, my personal boilerplate includes it, so I ran with it.

I've been told I use a strange format of casing, its just the way I write things in personal project for a raft of reasons, I have zero problems with doing it according to a organization guide though, so yeah, my casing is opinionated, but I'm more than happy to follow other style guides.



