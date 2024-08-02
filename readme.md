👾 this project is still in progress and needs to be completed.

# Number System Conversion
![g](https://github.com/oebarbie/bot-sysconversion/blob/1d43486956ddc703fb9a65e54b644c77fc2d5293/image/front.png)  

## What is Number System?
A number system is a method to represent numbers mathematically. It can use arithmetic operations to represent every number uniquely. To represent a number, it requires a base or radix.

### Types of Number System
There are four common types of number systems based on the radix or base of the number :

1. `Decimal` number system or Base `10` number system
2. `Binary` number system or Base `2` number system
3. `Octal` number system or Base `8` number system
4. `Hexadecimal` number system or Base `16` number system

### How to do base conversions?
For this, first take the number and then divide it by the given base. Then note down the remainder obtained after the division. Then, divide the quotient of the division obtained by the given base.

### How to calculate number system?
There are 3 required steps to calculate the number system.

STEP 1 – Divide the number with the given base of another number.
STEP 2 – Note down the resulting remainder
STEP 3 – Divide the quotient

## Number System Conversion Methods
A number N in base or radix b can be written as: 

(N)b = dn-1 dn-2 -- -- -- -- d1 d0 . d-1 d-2 -- -- -- -- d-m

### 1. Decimal to Binary Number System
To convert from decimal to binary, start dividing decimal number by 2, and whatever the reminder getting, writing down from bottom to top, and that will be the binary number representation of the decimal number. And the number contains fractional part, then multiply 2 in the fractional part.

Example: (10.25)10  
Answer: (10.25)10 = (1010.01)2  

### 2. Binary to Decimal Number System
To convert from binary to decimal, start multiplying the exponent of 2 with each digit of the number in decreasing order. If the number contains fractional part then will divide it by the exponent of 2.

Example: (1010.01)2  
Answer: (1010.01)2 = (10.25)10 

### 3. Decimal to Octal Number System
To convert from decimal to octal, start dividing decimal number by 8, and whatever the reminder getting, writing down from bottom to top, and that will be the octal number representation of the decimal number. And the number contains fractional part, then multiply 8 in the fractional part.

Example: (10.25)10  
Answer: (10.25)10 = (12.2)8 

### 4. Octal to Decimal Number System
To convert from octal to decimal, start multiplying the exponent of 8 with each digit of the number in decreasing order. If the number contains fractional part then will divide it by the exponent of 8.

Example: (12.2)8  
Answer: (12.2)8 = (10.25)10 

### 5. Hexadecimal to Binary Number System
To convert from Hexadecimal to Binary, write the 4-bit binary equivalent of hexadecimal.

Example: (3A)16  
Answer: (3A)16 = (00111010)2 

### 6. Binary to Hexadecimal Number System
To convert from Binary to Hexadecimal, start grouping the bits in groups of 4 from the right-end and write the equivalent hexadecimal for the 4-bit binary. Add extra 0’s on the left to adjust the groups. 

Example: (1111011011)2  
Answer: (001111011011)2 = (3DB)16 

### 7. Binary to Octal Number System
To convert from binary to octal, start grouping the bits in groups of 3 from the right end and write the equivalent octal for the 3-bit binary. Add 0’s on the left to adjust the groups.

Example: (111101101)2
Answer: (111101101)2 = (755)8

## Conclusion
In the conclusion, number system provides a representation of a number with respect to the given base or radix. Basically, we have common types of number system named as binary number system, decimal number system, octal number system and hexadecimal number system.
