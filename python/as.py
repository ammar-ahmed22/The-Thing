from PIL import Image
import numpy as np

image = np.array(Image.open('as.jpeg').convert('L')); #Getting the image and converting to grayscale (RGB makes the array 3d instead of 2D)
#this is now a 2D array of pixel values corresponding to the height and width of pixels
#the image used is 75x75, therefore, this is an array with 75 arrays inside it each with 75 integer values between 0 and 255, 0 being black, 255 being white


lines = [] #lines array

for i in range(len(image)):
    lines.append(''); #appending empty string for every "line" of pixels

#nested loop to access each individual pixel value
for i in range(len(image)):
    for k in range(len(image[i])):
        if image[i][k] > 5: #if pixel value > 5 (used 5 to catch pixels that might be slightly off from white) adds white space to the line string
            lines[i] += ' '
        else: #otherwise, adds @ to line string (makes it easier to see when printed to console or in a text file)
            lines[i] += '@' 


for i in range(len(lines)): #adding line break to the end of each string (so that text file has multiple lines instead of one long string)
    lines[i] += '\n'
    print(lines[i])


file = open('as.txt', "w");

file.writelines(lines); #writing to the text file

file.close()



