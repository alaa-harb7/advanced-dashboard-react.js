import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Header from "../../components/Header";

// Real-world data for a Dashboard FAQ
const faqData = [
  {
    id: "panel1",
    question: "How is the data in the dashboard updated?",
    answer:
      "The dashboard data is updated **every 5 minutes** using a real-time API connection. You can also click the 'Refresh Data' button in the top right corner to initiate a manual update.",
  },
  {
    id: "panel2",
    question: "Can I filter the data by a specific date range?",
    answer:
      "Yes. Use the **Date Range Picker** located above the main charts. Select your desired start and end dates and click 'Apply' to instantly update all displayed metrics.",
  },
  {
    id: "panel3",
    question: "What does the 'Conversion Rate' metric represent?",
    answer:
      "The **Conversion Rate** shows the percentage of visitors who completed the primary goal action (e.g., a purchase, signup, or download). It is calculated as (Completed Actions / Total Visitors) * 100.",
  },
  {
    id: "panel4",
    question: "How do I export the reports or charts?",
    answer:
      "To export any chart, hover over it and click the **three-dot menu** (⋮). You will see options to 'Download as CSV,' 'Export to PDF,' or 'Print Chart.'",
  },
  {
    id: "panel5",
    question: "Why is one of my widgets showing 'No Data'?",
    answer:
      "This usually means the data source for that specific widget is temporarily unavailable or there is no data matching your current **filters/segmentation**. Please check your filter settings or contact support if the issue persists.",
  },
  {
    id: "panel6",
    question: "How can I add a new user or change permissions?",
    answer:
      "Only users with **Admin** privileges can manage users. Navigate to the 'Settings' section, then 'User Management.' From there, you can invite new users and assign them specific roles (e.g., Viewer, Editor, Admin).",
  },
  {
    id: "panel7",
    question: "Is the dashboard accessible on mobile devices?",
    answer:
      "Yes, the dashboard is **fully responsive**. While all features are available, we recommend using a tablet or desktop for detailed data analysis and chart viewing.",
  },
];

export default function Faq() {
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Stack sx={{ gap: 3 }}>
        {faqData.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              <Typography component="span" fontWeight="bold">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
}
