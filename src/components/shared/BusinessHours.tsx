"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import { DAY_NAMES, cn, formatTime12h } from "@/lib/utils";

/**
 * Full weekly hours table with today's row highlighted. This is a
 * Client Component specifically because "today" must reflect the
 * visitor's own local date, not the server's build-time date — this
 * page is statically generated (SSG), so a server-computed "today"
 * would be frozen at build time and silently wrong on every subsequent
 * day. The server-rendered pass highlights nothing (a safe, deterministic
 * default); the correct row highlights itself in immediately after
 * mount, once the visitor's actual local day is known.
 */
export function BusinessHours() {
  const [todayName, setTodayName] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial sync with the external wall-clock (the visitor's local "today"), same justified case as useOpenStatus.
    setTodayName(DAY_NAMES[new Date().getDay()]);
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
        Hours
      </h3>
      <table className="mt-3 w-full text-[15px]">
        <caption className="sr-only">Weekly business hours</caption>
        <tbody>
          {siteConfig.hours.map((entry) => {
            const isToday = entry.day === todayName;
            const isClosed = !entry.open || !entry.close;

            return (
              <tr
                key={entry.day}
                className={cn(
                  "border-b border-border last:border-0",
                  isToday && "font-semibold text-primary"
                )}
              >
                <th
                  scope="row"
                  className={cn(
                    "py-2 pr-4 text-left font-medium text-text-primary",
                    isToday && "font-semibold text-primary"
                  )}
                >
                  {entry.day}
                  {isToday && <span className="sr-only"> (today)</span>}
                </th>
                <td
                  className={cn(
                    "py-2 text-right",
                    isToday ? "text-primary" : "text-text-secondary"
                  )}
                >
                  {isClosed
                    ? "Closed"
                    : entry.open === "00:00" && entry.close === "23:59"
                      ? "Open 24 Hours"
                      : `${formatTime12h(entry.open)} – ${formatTime12h(entry.close)}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
