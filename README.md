# Bachelor Thesis Mona Kögel
In her thesis Mona Kögel investigated a design system for forms that is engineered to a high UX- and accessibility-standard. By creating a catalog of separate widgets which can be combined into a complete form makes the development easy enough so even non-programmers can construct and maintain such forms. Also the form changes dynamically, depending on what information the user has already given, so he spends less time on answering questions that are not concerning to him. To support the research on this topic she created a prototype. With this was tested if someone with minimal technical knowledge can build a simple form with this kind of design system.


## Addition for Build and Deployment
###Building the Application and Docker Image
The Dockerbuild is a Multistage build that is seperated in 2 parts.
First part is compiling the Javascript code with a Node image
Second part ist building a nginx image with the artefacts from step 1.

With ``docker build -t <imagename> <path/to/dockerfile> `` can you start the build.
For e.g. ``docker build -t angular-test:0.1 .`` (where the dot indicates the cmd is run from
inside the folder where the dockerfile exists)

### Quick Step for OSCP Deployment
We included a basic Helm Setup w/o creating a Route - (Object for future work).

Build the Image with ``docker build -t <imagename> <path/to/dockerfile ``
Push the Image to the Registry (after login in) ```docker push <imagename>```
Then Scale to Deployment down and afterwards up.

## Future Use of this Fork 
Use of Gitlab Actions for learning purposes
