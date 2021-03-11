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
In the following, let us consider the following examplary fragments of an fCM:
<img width="688" alt="image" src="https://user-images.githubusercontent.com/32839252/110783487-cfd53c00-8268-11eb-828c-aa73ab66f773.png">

To use the Objective Framework, run the project. 

It is now possible to insert Data Objects with thier states, and Tasks.
<img width="564" alt="image" src="https://user-images.githubusercontent.com/32839252/110783735-19be2200-8269-11eb-93f6-9e9a36c62d8e.png">

To create a new Objective, click `Create New`.
<img width="730" alt="image" src="https://user-images.githubusercontent.com/32839252/110783684-0dd26000-8269-11eb-82b0-5605d1d5c389.png">

An Objective can consist of desired Data Object states and enabled Tasks.

For the desired input, the state space query is automatically compiled. It can be copied and used for the analysis in [CPN Tools](http://cpntools.org).
The CPN-representation of the example can be found in `example/conference.cpn`.

The state space query is an ASK-CTL formula. More information can be found [here](http://cpntools.org/wp-content/uploads/2018/01/askctlmanual.pdf).

To execute it, first the models state space must be generated. To do so, select the generate state space option in the state space tool and click into the net. Due to the size of the state space, this might take several minutes.

Also, the strongly connected components graph has to be computed. Choose the option in the state space tool and click into the net.

Next, the the ASK-CTL compiler must be loaded. Choose the ML compiler in the simulation tool and compile the expression `use (ogpath^"ASKCTL/ASKCTLloader.sml")` by clicking on it.

Now, any ASK-CTL formula can be executed by choosing the ML compiler and clicking on it. To execute the state space query, copy it into a separate text field in the net. In the examplary CPN, the previously created state space query is already given.

To execute the query from the current state on, choose the 'Sim to State Space' option of the state space tool. The current state node is displayed. Insert it into the state space query and execute it.

The query returns a boolean indicating whether or not an execution state can be reached that satisfies the objective. For all possible successor states, it can be investigated which can lead to a satisfying state and which can't. To inverstigate the state space and the successor states of the current state, the state space can be visualized by using the state space tool.
 
