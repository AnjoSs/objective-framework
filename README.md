# objective-framework

During the execution of fragment-based Case Models (fMC), the Knowledge Worker (KW) needs assistance with making decisions. The Objective Frameworks offers support by providing the opportunity to define Objectives that should be met in the future of the execution. The fCM's state space can then be analyzed according to the Objective with a state space query. This query searches for execution states that satisfy the Objective. The path to such a state can serve as an assistance for making decisions.

The Objective Framework allows the KW to formally define state space queries on a high-level abstraction. It provides an interface to compose Objectives according to Data Objects, their states and Tasks of the fCM. The Objective is then compiled into a state space query. More information can be found in the paper 'Late Goal Modelling for Fragment-Based Case Management'.

The Objective Framework relies on the formal representations of fCMs as Colored Petri nets (CPN). The compiled state space queries can be applied to the CPN representation of fCMs provided by the [fcm2cpn](https://github.com/bptlab/fcm2cpn/tree/master) compiler. In the future, the state space queries will be automatically executable with the [fcm-Engine](https://github.com/bptlab/fCM-Engine).

<img width="469" alt="image" src="https://user-images.githubusercontent.com/32839252/110480380-b99f7280-80e6-11eb-88bf-f66eeda032e8.png">

The state space queries can be analyzed with [CPN Tools](http://cpntools.org).

## Content of the Repository
This repository is a [Vue.js application](https://vuejs.org). It uses the material design framework [Vuetify](https://vuetifyjs.com/). The interface is provided in `src/components`

The compiler of the input to state space queries is present in `src/compiler/compiler.js`.

An examplary CPN can be found in ...

## Project setup
The project can be used with the latest version of [npm](https://www.npmjs.com).

To install all dependencies, run:
```
npm install
```

To run the project, run:
```
npm run serve
```

The application should then be available at `http://localhost:8080`.

## Usage
To use the Objective Framework, run the project. 

It is now possible to insert Data Objects with thier states, and Tasks.

To create a new Objective, click `Create New`.

An Objective can consist of desired Data Object states and enabled Tasks.

For the desired input, the state space query is automatically compiled. It can be copied and used for the analysis in [CPN Tools](http://cpntools.org).

The state space query is an ASK-CTL formula. More information can be found [here](http://cpntools.org/wp-content/uploads/2018/01/askctlmanual.pdf).
 
