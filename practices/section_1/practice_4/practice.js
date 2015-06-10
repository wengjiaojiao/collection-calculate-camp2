function collect_same_elements(collection_a, object_b) {
    var same = [] ;

    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < object_b.value.length; j++) {
            if(collection_a[i].key === object_b.value[j]) {
                same.push(collection_a[i].key);
            }
        }
    }
    return same;
}

module.exports = collect_same_elements;
