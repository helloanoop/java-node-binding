# java-node-binding
An example demonstrating communication between node and java program!

Yep! You hear it !!
Your JS files can call Java methods !!

### Dependencies
* Java >= v8 (This projected tested with v8)
* Node >= v10 (This projected tested with v10.16.0)
* Npm >= v6 (This projected tested with v6.9.0)
* Node Gyp v6.1.0

### Install
```bash
# Install deps
sudo npm install  --unsafe-perm

# Rebuild
sudo npm rebuild  --unsafe-perm
```

### Run
```bash
# compile
javac -d . Simple.java

# run
java acme.Simple

# creating executable jar file
jar cvmf Manifest.mf Simple.jar acme/Simple.class

# Execute jar file
java -jar Simple.jar

# hello-world.js (Use Java classes)
node hello-world.js

# array-list.js (Use Java array utils)
node array-list.js

# call-methods-in-local-jar.js (Call methods of our locally created jar)
node call-methods-in-local-jar.js
```

## Contribute
Pull Requests always welcome, as well as any feedback or issues.
