# Iris
Smart Home management application made using React Native

# Generating Debug Key

```bash
  keytool -genkeypair -v -keystore android/app/debug.keystore -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=React Native Debug, OU=React Native, O=React, L=React, ST=React, C=US" -storepass android -keypass android -alias androiddebugkey
```