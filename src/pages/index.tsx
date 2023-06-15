import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Calculates the time difference between the server time and client time.
 * @param {Date} serverTime - The server time.
 * @param {Date} clientTime - The client time.
 * @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
 */
const calculateTimeDifference = (serverTime, clientTime) => {
    const timeDiff = Math.abs(serverTime - clientTime);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};

export default function Home() {
    const router = useRouter();

    const moveToTaskManager = () => {
        router.push("/tasks");
    };

    const serverTime = new Date(); // Get the server time

    const clientTime = new Date(); // Get the client time

    const timeDiff = calculateTimeDifference(serverTime, clientTime); // Calculate the time difference

    const serverTimeFormatted = serverTime.toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <>
            <Head>
                <title>Web 2 - Exam TD</title>
                <meta name="description" content="Just an exam" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>The easiest exam you will ever find</h1>
                <div>
                    <p>
                        Server time:{" "}
                        <span className="serverTime">{serverTimeFormatted}</span>
                    </p>

                    <p>
                        Time diff:{" "}
                        <span className="serverTime">{timeDiff}</span>
                    </p>
                </div>

                <div>
                    <button onClick={moveToTaskManager}>Go to task manager</button>
                </div>
            </main>
        </>
    );
}
