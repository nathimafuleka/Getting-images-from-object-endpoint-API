import Dialog from "@mui/material/Dialog";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDownward from "@mui/icons-material/ArrowDropDown";

type Props = {
  open: boolean;
  close: () => void;
  details: any;
};

const Compdetail = ({ close, open, details }: Props) => {
  return (
    <Dialog
      PaperProps={{ sx: { background: "#373737" } }}
      onClose={close}
      open={open}
    >
      <ul className="p-2 text-gray-400">
        <li>
          <span>Accession No. : </span>
          {details?.accessionNumber}
        </li>
        <li>
          <span>Accession Year : </span>
          {details?.accessionYear}
        </li>

        <li>
          <span>Department : </span>
          {details?.department}
        </li>
        <li>
          <span>Culture : </span>
          {details?.culture}
        </li>
        <li>
          <span>Credit : </span>
          {details?.creditLine}
        </li>
        {details?.artistDisplayName && (
          <li>
            <span>Artist : </span>
            <a href={details?.artistWikidata_URL || ""}>
              {details?.artistDisplayName}
            </a>
          </li>
        )}
        <li>
          <span>Date : </span>
          {details?.objectDate}
        </li>
        {details?.constituents && (
          <li>
            <Accordion variant="outlined">
              <AccordionSummary
                expandIcon={<ArrowDownward />}
                aria-controls="Constituents"
                id="Constituents"
              >
                <Typography>Constituents</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {details?.constituents?.map((el: any) => (
                  <ul key={el?.constituentID}>
                    <li>
                      <span>Name : </span>
                      {el?.name}
                    </li>
                    <li>
                      <span>Role : </span>
                      {el?.role}
                    </li>
                    <li>
                      <a href={el?.constituentULAN_URL}>ULAN</a>
                    </li>
                    <li>
                      <a href={el?.constituentWikidata_URL}>Wiki Data</a>
                    </li>
                  </ul>
                ))}
              </AccordionDetails>
            </Accordion>
          </li>
        )}
      </ul>
    </Dialog>
  );
};

export default Compdetail;
