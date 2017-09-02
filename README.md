# metalsmith-once
Like [metalsmith-each], but for doing something once.

```js
metalsmith.use(once, (files, metalsmith) => {
  metalsmith.clear(true)
})
```

[metalsmith-each]: https://github.com/wilsaj/metalsmith-each
