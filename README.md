This "Hello Word" app is the third effort at learning the basics of the MEAN application stack. The goal was creating a more complex (relational) data model; adding a concept of a winery with every wine being associated with a winery. 

Outside of finding the Mongoose ID Validator (below), the changes to both the Express and Angular applications were trivial.

_Mongoose ID Validator_

The primary challenge was how to handle this with the explicitly non-relation mongoDB database.  The answer was fairly clear, I had to store the object ids as the foreign key and enforce the constraint by validation in the application.

The first step was to use the population feature of Mongoose to define the references; but there was no out of the box referencial integrity checking.

Mongoose Query Population
<http://mongoosejs.com/docs/populate.html>

Then I found the plug-in to Mongoose called mongoose-id-validator that provided the referencial integrity checking.

mongoose-id-validator
<https://www.npmjs.org/package/mongoose-id-validator>
