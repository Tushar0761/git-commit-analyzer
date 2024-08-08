console.clear()
const simpleGit = require("simple-git");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const git = simpleGit();

const csvWriter = createCsvWriter({
    path: "commit_stats.csv",
    header: [
        { id: "count", title: "Sr" },
        { id: "message", title: "Commit Message" },
        { id: "date", title: "Commit Date" },
        { id: "addedChars", title: "Added Lines" },
        { id: "removedLines", title: "Removed Lines" },
        { id: "hash", title: "Hash" },
    ],
});

async function getCommitStats() {
    try {

      const log = await git.log();
console.log(log);

      let commits = log.all;

        commits = commits.reverse();
        commits = commits.filter((c) => c.author_name === "Tushar Panchal");
      const rowData = []
      // console.log(commits[0]);

        let count = 0;
        console.log("Loop Started");

        for (const commit in commits) {
          if(commit==0 )          {
            continue
          }
          // if(commit>5){
          //   break
          // }
          let { message:message1, hash:hash1, date:date1, } = commits[commit];
          let {   message:message2, hash:hash2,date:date2 } = commits[commit-1];

          date1 = new Date(date1).toLocaleString() // current 
          date2 = new Date(date2).toLocaleString() // previous

            let msg = "";
            count += 1;
            const diff = await git.diffSummary([hash2, hash1]);
            msg += `----------------------------   ${count}   ------------------------------\n`;
            // date = date.slice(0, 10);
      // console.log(diff);

            const { insertions, deletions } = diff;
            msg += "\tmessage cur| " + message1 + "\n";
            msg += "\tmessage prev| " + message2 + "\n";
            // msg += "\thash \t| " + hash + "\n";
            msg += "\tdate cur\t| " + date1 + "\n";
            msg += "\tdate prev\t| " + date2 + "\n";
            msg += "\tinsertion | " + insertions + "\n";
            msg += "\tdeletions | " + deletions + "\n";

            rowData.push({
              count,
              message:message1, date:date1,addedChars:insertions,removedLines:deletions,hash:hash1
            })

          }
          console.log("loop done");
          console.timeEnd("loop done");
          console.time("Write in CSV");
          
        await csvWriter.writeRecords(rowData);
        console.timeEnd("Write in CSV");
        console.timeEnd("Function Started");

        console.log('CSV file created successfully.');
    } catch (err) {
      console.log("error out");
        // console.error('Error generating commit stats:', err);
    }

}

getCommitStats();
