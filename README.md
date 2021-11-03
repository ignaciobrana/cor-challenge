# Cor-Challenge

This algorithm answered the challenge using NodeJS and typescript.

Into the file "src/index.ts" is the algorithm.

----
Given a list of words, determine whether the words can be chained to form a circle. A word X
can be placed in front of another word Y in a circle if the last character of X is the same as
the first character of Y.

For example, the words ['chair', 'height', 'racket', touch', 'tunic'] can form the following circle:
chair --> racket --> touch --> height --> tunic --> chair

The output it has to be a txt file with one word per line, ex:
chair
racket
touch
height
tunic

Is very important the logic and the performance of the algorithm.

----

## 📲 Installation 
1. Clone git repository
2. Open the command console on the root of the project's path
3. Install the dependencies:
```sh
$ npm install
```
4. Run the project:
```sh
$ npm run start
```

## 📚 Documentation
1. The input array strings is declare as: ['height', 'racket', 'chair', 'touch', 'tunic']
2. The result of algorithm is writed in a file called "result.txt" in the root of path