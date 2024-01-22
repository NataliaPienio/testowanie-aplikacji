import unittest

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

class NazwaDowolna(unittest.TestCase):
    def test1_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')
    def test2(self):
        self.assertEqual(fibonacci(3), 2)
    def test3_ASD(self):
        self.assertTrue(True)
    
if __name__ == '__main__':
    unittest.main()