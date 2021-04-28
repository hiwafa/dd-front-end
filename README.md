# DeepDialog Frontend
The frontend is written in JavaScript and React Native.

Expo is used to make it easier to develop, build and deploy for various platforms.

## How to use
1) open terminal of choice
```
> expo start
```
2) choose emulator/web
```
> w           //for web
> shift+a     //for device/emulator
```
3) develop to your heart's content
4) build for production
```
> expo build:web
```

## Commonly Used Components
### \<Screen>
Screen is the most fundamental component for building a UI, it's basically a container similar to \<div> in HTML.
```
<View style={{backgroundColor:'black', height:'100%'}}>
  {/*BACKGROUND VIEW*/}
  <View style={styles.loginContainer}>
    {/*LOGIN VIEW*/}
  </View>
</View>
```

#### Common Properties
style, focusable, collapsable

### \<Text>
Component for displaying text, simular to \<p> in HTML.
```
<Text style={styles.header}>Welcome,</Text>
```

#### Common Properties
disabled, onPress, selectable, style
