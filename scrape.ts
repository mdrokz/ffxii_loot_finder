const loot_tables = [...document.getElementsByClassName('FFXII')]

const loot_list = [];

(() => {

    for (const loot_table of loot_tables) {
        let table = [...loot_table.children[0].children].splice(1);

        for (let i = 0; i < table.length; ++i) {

            let loot = {
                info: {
                    name: '',
                    price: '',
                    drop: '',
                    monograph_drop: '',
                    steal: '',
                    poach: '',
                    reward: ''
                },
                description: '',
                baazar: {
                    items: []
                }
            }


            if (i % 3 == 0) {

                let info_table = table[i].children;

                let baazar_table = table[i + 1].children;

                loot.description = (<HTMLElement>table[i + 2].children[0].children[0]).innerText;

                for (let v = 0; v < info_table.length; ++v) {
                    let keys = Object.keys(loot.info);

                    loot.info[keys[v]] = (<HTMLElement>info_table[v]).innerText;
                }

                let items: string[] = [...(baazar_table[0].children[1]?.children == null ? [] : baazar_table[0].children[1].children)].flatMap(x => {
                    let split = (<HTMLElement>x).innerText.split('(').splice(1).map(x => x.replace(')', ''));

                    return [split[0], split[1]]
                });

                loot.baazar.items = items;

                loot_list.push(loot);

            }

        }
    }

    return loot_list;
})()

