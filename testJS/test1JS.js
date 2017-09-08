/**
 * Created by I067382 on 8/30/2016.
 */

async function series() {
    await wait(500);
    await wait(500);
    return "done!";
}

series();