class Circle:
    def __init__(self, radius=None, diameter=None):
        self.radius = radius
        self.diameter = diameter
        if self.radius is not None:
            self.diameter = self.radius * 2
        elif self.diameter is not None:
            self.radius = self.diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")
    
    def cercle_area(self):
        return 3.14 * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            raise TypeError("Can only add Circle objects.")
    
    def __gt__(self, other):
        if isinstance(other, Circle):
            if self.radius > other.radius:
                return True
            else:
                return False
        else:
            raise TypeError("Can only compare Circle objects.")
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            if self.radius == other.radius:
                return True
            else:
                return False
        else:
            raise TypeError("Can only compare Circle objects.")
    

    
    def list_cercles_sorted(self, other_list):
        other_list.append(self)
        sorted_cercle = sorted(other_list)
        return sorted_cercle

