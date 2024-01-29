import pytest
import math


class Circle():
    def __init__(self,radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def perimeter(self):
        return math.pi * 2 * self.radius

def add(a, b):
    return a+b

def divide(a, b):
    if b == 0:
        raise ValueError
    return a/b

def test_Add():
    result = add(1, 4)
    assert result == 5

def test_Divide():
    result = divide(10, 5)
    assert result == 2

def test_divide_zero():
    with pytest.raises(ZeroDivisionError):
        result = divide(10,0)

@pytest.mark.skip(reason="Pomijamy")
@pytest.mark.parametrize("a, b, expectedResult", [(10, 5, 2),(528, 12, 44), (100, 10, 10)])
def test_ultimate_divide(a, b, expectedResult):
    result = divide(a, b)
    assert result == expectedResult

@pytest.fixture()
def my_circle():
    return Circle(10)

def testArea(my_circle):
    assert my_circle.area() == math.pi * 10 ** 2

def testPerimeter(my_circle):
    assert my_circle.perimeter() == math.pi * 2 * 10