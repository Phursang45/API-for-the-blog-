//Assignment no 2




function findPair(nums, target) {
    
    const seen = [];
    
    // Trransverse the array
    for (let num of nums) {
        // here calculating the complement of the num
        const complement = target - num;
        
        // Check if the complement is already in the array
        if (seen.includes(complement)) {
            console.log(`Pair found (${complement}, ${num})`);
            return;
        }
        
        // Add the current number to the array
        seen.push(num);
    }
    
    // if no pair found
    console.log("Pair not found");
}

// Here is the value for the test
// const nums1 = [8, 7, 2, 5, 3, 1];
// const target1 = 10;
// findPair(nums1, target1);

const nums2 = [5, 2, 6, 8, 1, 9];
const target2 = 12;
findPair(nums2, target2);
