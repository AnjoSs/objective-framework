# objective-framework

During the execution of fragment-based Case Models (fMC), the Knowledge Worker (KW) needs assistance with making decisions. The Objective Frameworks offers support by providing the opportunity to define Objectives that should be met in the future of the execution. The fCM's state space can then be analyzed according to the Objective with a state space query. This query searches for execution states that satisfy the Objective. The path to such a state can serve as an assistance for making decisions.

The Objective Framework allows the KW to formally define state space queries on a high-level abstraction. It provides an interface to compose Objectives according to Data Objects, their states and Tasks of the fCM. The Objective is then compiled into a state space query. More information can be found in the paper 'Late Goal Modelling for Fragment-Based Case Management'.

The Objective Framework relies on the formal representations of fCMs as Colored Petri nets (CPN). The compiled state space queries can be applied to the CPN representation of fCMs provided by the [fcm2cpn](https://github.com/bptlab/fcm2cpn/tree/master) compiler. In the future, the state space queries will be automatically executable with the [fcm-Engine](https://github.com/bptlab/fCM-Engine).

<img width="350" alt="image" src="https://user-images.githubusercontent.com/32839252/110480380-b99f7280-80e6-11eb-88bf-f66eeda032e8.png">

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

<img width="400" alt="image" src="https://user-images.githubusercontent.com/32839252/110783487-cfd53c00-8268-11eb-828c-aa73ab66f773.png">

To use the Objective Framework, run the project.

It is now possible to insert Data Objects with thier states, and Tasks.

<img width="400" alt="image" src="https://user-images.githubusercontent.com/32839252/110783735-19be2200-8269-11eb-93f6-9e9a36c62d8e.png">

To create a new Objective, click `Create New`.

<img width="400" alt="image" src="https://user-images.githubusercontent.com/32839252/110791450-85f15380-8272-11eb-9473-1e473c4248de.png">

An Objective regards one execution state and can consist of desired Data Object states and enabled Tasks. The semantic for Data Objects and desired states is that for a chosen state at least one Data Object with that state should exist. All options connected with the logic AND.

For the desired input, the state space query is automatically compiled. It can be copied and used for the analysis in [CPN Tools](http://cpntools.org).
The CPN-representation of the example can be found in `example/conference.cpn`.

The state space query is an ASK-CTL formula. More information can be found [here](http://cpntools.org/wp-content/uploads/2018/01/askctlmanual.pdf).

<img width="1017" alt="image" src="https://user-images.githubusercontent.com/32839252/110791925-13cd3e80-8273-11eb-88ca-bd31b6987e25.png">

To execute it, first the models state space must be generated. To do so, select the generate state space option in the state space tool and click into the net. Due to the size of the state space, this might take several minutes.

<img width="100" alt="image" src="https://user-images.githubusercontent.com/32839252/110791549-a4574f00-8272-11eb-85d3-052434bb50f3.png">

Also, the strongly connected components graph has to be computed. Choose the option in the state space tool and click into the net.

<img width="100" alt="image" src="https://user-images.githubusercontent.com/32839252/110791587-ade0b700-8272-11eb-9e28-e3cd15c1f053.png">

Next, the the ASK-CTL compiler must be loaded. Choose the ML compiler in the simulation tool and compile the expression `use (ogpath^"ASKCTL/ASKCTLloader.sml")` by clicking on it.

<img width="200" alt="image" src="https://user-images.githubusercontent.com/32839252/110791704-cf41a300-8272-11eb-9fa5-9099d3dd19d7.png">

Now, any ASK-CTL formula can be executed by choosing the ML compiler and clicking on it. To execute the state space query, copy it into a separate text field in the net. In the examplary CPN, the previously created state space query is already given.

To execute the query from the current state on, choose the 'Sim to State Space' option of the state space tool. The current state node is displayed. Insert it into the state space query and execute it.

<img width="100" alt="image" src="https://user-images.githubusercontent.com/32839252/110791678-c6e96800-8272-11eb-8b86-919a5d1286d0.png">

The query returns a boolean indicating whether or not an execution state can be reached that satisfies the objective. For all possible successor states, it can be investigated which can lead to a satisfying state and which can't.

<img width="100" alt="image" src="https://user-images.githubusercontent.com/32839252/110791660-bfc25a00-8272-11eb-97ff-29239c890b1e.png">

To inverstigate the state space and the successor states of the current state, the state space can be visualized by using the state space tool.

<img width="956" alt="image" src="https://user-images.githubusercontent.com/32839252/110791802-ec767180-8272-11eb-8426-01f5af7d431b.png">
