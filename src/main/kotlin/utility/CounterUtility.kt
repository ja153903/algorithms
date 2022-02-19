package utility

class CounterUtility {
    companion object {
        fun <K> createCounter(items: List<K>): MutableMap<K, Int> {
            val counter = mutableMapOf<K, Int>()

            for (item in items) {
                counter[item] = counter.getOrDefault(item, 0) + 1
            }

            return counter
        }
    }
}