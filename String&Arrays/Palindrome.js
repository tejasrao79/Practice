
function getPossiblePalindroms(input) {
    var str = input.toLowerCase().split('');
    var length = str.length;
    // console.log("Length : " + length);
    
    for(i=1;i<(length - 1);i++) {
        var isPalindrom = true;
        var left = 1;
        var right = 1;

        while(isPalindrom && i - left >= 0 && i + right < length) {

            if(str[i] == str[i - left] && right == 1) {
                console.log(input.substring(i - left, i + 1));
                left++;
                continue;
            }

            isPalindrom = str[i - left] == str[i + right];

            if(isPalindrom) {
                console.log(input.substring(i - left, i + right + 1));
            }

            right++;
            left++;
        }
    }
}

// getPossiblePalindroms('nursesRun');
// getPossiblePalindroms('geeks');
// getPossiblePalindroms('nitin');
// getPossiblePalindroms("nittttin");
// getPossiblePalindroms("lirilliril");
// getPossiblePalindroms('madamImAdam');