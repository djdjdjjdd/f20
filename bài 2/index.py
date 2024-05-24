# import matplotlib.pyplot as plt
# import numpy as np

# from matplotlib import cm

# plt.style.use('_mpl-gallery')

# # Make data
# X = np.arange(-5, 5, 0.25)
# Y = np.arange(-5, 5, 0.25)
# X, Y = np.meshgrid(X, Y)
# R = np.sqrt(X**2 + Y**2)
# Z = np.sin(R)

# # Plot the surface
# fig, ax = plt.subplots(subplot_kw={"projection": "3d"})
# ax.plot_surface(X, Y, Z, vmin=Z.min() * 2, cmap=cm.Blues)

# ax.set(xticklabels=[],
#        yticklabels=[],
#        zticklabels=[])

# plt.show()

fam = [1.73, 1.68, 1.71, 1.89]
for i in fam :
       if i % 2 == 0:
              print(i)
       # print(i)
for index , height in enumerate(fam):
       print("index" + str(index) + ':' + str(height))      
for c in 'family':
       print(c.capitalize())        
import pandas as pd
brics = pd.read_cvs('brics', index_col = 0)
for lab, row in brics.interrow():
        print(lab)
        print(row)
