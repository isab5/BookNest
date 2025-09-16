"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import BookCard from "../components/BookCard/BookCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="font-inter-bold">Welcome to BookNest</h1>
    </div>
  );
}
