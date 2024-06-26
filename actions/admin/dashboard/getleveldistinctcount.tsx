"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function getLevelDistinctCount() {
  const user = await auth();
  const userId = user?.user.id;
  const intermidarecoursecount = await db.courseUser.count({
    where: {
      course: {
        userId: userId,
        level: "Intermediate",
      },
    },
  });
  const beginnercoursecount = await db.courseUser.count({
    where: {
      course: {
        userId: userId,
        level: "Beginner",
      },
    },
  });
  const advancedcoursecount = await db.courseUser.count({
    where: {
      course: {
        userId: userId,
        level: "Advanced",
      },
    },
  });
  const levelcount = [
    {
      level: "Intermediate",
      levelCount: intermidarecoursecount,
    },
    {
      level: "Beginner",
      levelCount: beginnercoursecount,
    },
    {
      level: "Advanced",
      levelCount: advancedcoursecount,
    },
  ];
  return levelcount;
}

export async function getTheoriginofsubscriptionuser() {
  const subscriptionuser = await db.user.findMany({
    //distinct user how purchased the course

    include: {
      origin: true,
    },
  });
  const userfromafricacount = subscriptionuser.filter(
    (u) => u?.origin?.region === "Africa"
  ).length;
  const userfromasiacount = subscriptionuser.filter(
    (u) => u?.origin?.region === "Asia"
  ).length;
  const userfromeuropecount = subscriptionuser.filter(
    (u) => u?.origin?.region === "Europe"
  ).length;
  const userfromamericacount = subscriptionuser.filter(
    (u) => u?.origin?.region === "America"
  ).length;
  const userfromothercount = subscriptionuser.filter(
    (u) => u!.origin?.region === "Other"
  ).length;
  const subscriptionusers = [
    {
      userCount: userfromafricacount,
      region: "Africa",
    },
    {
      userCount: userfromasiacount,
      region: "Asia",
    },
    {
      userCount: userfromeuropecount,
      region: "Europe",
    },
    {
      userCount: userfromamericacount,
      region: "America",
    },

    {
      userCount: userfromothercount,
      region: "Other",
    },
  ];

  return subscriptionusers;
}
