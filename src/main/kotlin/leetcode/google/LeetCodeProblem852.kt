package leetcode.google

class LeetCodeProblem852 {
    fun peakIndexInMountainArray(arr: IntArray): Int {
        for (i in 1 until arr.size - 1) {
            if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
                return i;
            }
        }

        return -1;
    }
}