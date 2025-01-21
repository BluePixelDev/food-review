import { execSync } from "child_process";

try{
    console.log(".... INSTALLING ....")
    execSync("npm install", { stdio: "inherit" });

    console.log(".... MIGRATING ....")
    execSync("npx prisma migrate dev --name Init", { stdio: "inherit" });

    console.log(".... RUNNING DEV ....")
    execSync("npx run dev", { stdio: "inherit" });
}catch (error) {
    console.error("❌ Setup failed:", error);
    process.exit(1);
}