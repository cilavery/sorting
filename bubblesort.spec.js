describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles single element in an array', function(){
        expect( bubbleSort([1]) ).toEqual([1]);
    });

    it('handles an array with unordered elements', function(){
        expect( bubbleSort([7,3,2,9]) ).toEqual([2,3,7,9]);
    });

    it('handles a big array with unordered elements', function(){
        expect( bubbleSort([10,6,34,12,56,78,1,0,15]) ).toEqual([0,1,6,10,12,15,34,56,78]);
    });

    it('handles an array with unordered and negative elements', function(){
        expect( bubbleSort([10,6,34,12,-4]) ).toEqual([-4,6,10,12,34]);
    });

    it('handles an array with unordered elements and checks for dublicates', function(){
        expect( bubbleSort([10,6,34,12,10]) ).toEqual([-4,6,10,12,34]);
    });

    it('handles checks that an array only contains numbers', function(){
        expect( bubbleSort([10,6,34,'a',12]) ).toEqual('Error! An aray should only contains numbers!');
    });

  });
