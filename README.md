# react-yrange-provider
Gets padded `minY`, `maxY` for `data` based on given `x`, `y` attributes within `minX`, `maxX`. And provide the `minY`, `maxY` to downstream component using `render` props.

## Examples
```
<react-yrange-provider  data={ [{this:x,that:y},...] }
                        x="this"
                        y="that"
                        minX={minX}
                        maxX={maxX}
                        render={({minY,maxY}) =>
  <>
    Some Rendered stuff
  </>
                        }/>
```

