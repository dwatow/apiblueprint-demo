

# Polls API Root [/]

## Retrieve the Entry Point [GET]

+ Response 200 (application/json)

    + Attributes
        + Human (Administrator)
            + workHistory (Company)


# Data Structures

# Person

+ name: `Spencer-Churchill` (string) - The Person's name

# Administrator (Person)

+ role (string) - The administrators role

# Company

+ name: Apiary
+ founder (Person)
+ founded: 2011 (number) - The year in which the company was founded
+ address
    + street: 235 Ninth Street
    + city: San Francisco
    + state: California
