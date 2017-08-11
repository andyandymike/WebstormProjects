/**
 * Created by I067382 on 8/30/2016.
 */

{
    function foo () { return 1 }
    console.log(foo())
    {
        function foo () { return 2 }
        console.log(foo())
    }
    console.log(foo())
}