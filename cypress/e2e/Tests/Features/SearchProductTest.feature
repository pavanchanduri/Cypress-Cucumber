Feature:  I want to login into the site with valid data
 
Background:
    Given I navigate to the Website

Scenario: Login as new sign up user with valid data
    When I entered valid credential
        | email                  | validpassword |
        | lambdatest@yopmail.com | lambdatest    |
    And User click on sign in button
    Then Validate the title after login

Scenario: Search the Product
    When User search the product
    Then Validate the product after search
        | product | productaftersearch |
        | VAIO    | Sony VAIO          |