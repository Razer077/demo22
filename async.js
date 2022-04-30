const yt = () => new Promise(reslove => {
    setTimeout(() => {
        console.log(1);
        reslove("first reslove");
    }, 2000);
})

const yt2 = () => new Promise(reslove => {
    setTimeout(() => {
        console.log(2);
        reslove("second reslove");
    }, 2000);
})

const display = async () => {
    const first = await yt();
    const second = await yt2();
    console.log(first);
    console.log(second);
}

display();
