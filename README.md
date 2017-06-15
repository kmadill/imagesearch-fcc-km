# Image Search Abstraction Layer

This simple API was created as part of Free Code Camp's curriculum.

## Getting Started

Give it a try [here](https://imagesearch-fcc-km.herokuapp.com) (Heroku) or [here](https://imagesearch-fcc-km.glitch.me/) (Glitch).

### User Stories

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.


### Usage
#### Making a Query
##### Basic Query
```
https://imagesearch-fcc-km.herokuapp.com/api/search/funnycats
```

##### Query with Pagination
```
https://imagesearch-fcc-km.herokuapp.com/api/search/funnycats?offset=3
```

#### Getting Search History
```
https://imagesearch-fcc-km.herokuapp.com/api/latest
```
