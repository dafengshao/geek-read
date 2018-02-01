var localCache = (function() {

    var LocalCache = function() {
        var storage = window.localStorage;
        this.set = function(key, val, time) {
            var node = {};
            node['value'] = val;
            time = time || 86400000;
            node['expirAt'] = new Date().getTime() + time;
           storage.setItem(key, JSON.stringify(node));
        };
        this.remove = function(key) {
            storage.removeItem(key);
        };
        this.get = function(key) {
            var node = storage.getItem(key);
            if (node) {
                var time = new Date().getTime();
                node= JSON.parse(node)
                if (time <= node['expirAt']) {
                    return node['value'];
                }
                this.remove(key);
                node = null;
            }
            return null;
        }
    };

    /** 
* *********  操作实例  ************** 
*   var map = new HashMap(); 
*   map.put("key1","Value1"); 
*   map.put("key2","Value2"); 
*   map.put("key3","Value3"); 
*   map.put("key4","Value4"); 
*   map.put("key5","Value5"); 
*   alert("size："+map.size()+" key1："+map.get("key1")); 
*   map.remove("key1"); 
*   map.put("key3","newValue"); 
*   var values = map.values(); 
*   for(var i in values){ 
*       document.write(i+"："+values[i]+"   "); 
*   } 
*   document.write("<br>"); 
*   var keySet = map.keySet(); 
*   for(var i in keySet){ 
*       document.write(i+"："+keySet[i]+"  "); 
*   } 
*   alert(map.isEmpty()); 
*/

    return LocalCache;

})();