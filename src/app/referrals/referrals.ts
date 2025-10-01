import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { NgClass, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-referrals',
  imports: [MaterialModule, SlicePipe, NgClass],
  templateUrl: './referrals.html',
  styleUrl: './referrals.scss'
})
export class Referrals {
  hideShow: boolean = true;
  columns: string[] = [
    "S.No", "Child Name", "Mother Name", "Date of Birth", "Centre Name", "ECD Name",
    "Reason for Referral", "Clinical Findings", "Diagnosis", "Tests Advised",
    "Treatment Plan", "Prescription", "Referral Team"
  ]
  children = [
    {
      "S.No": 1,
      "Child Name": "Divya Sree",
      "Mother Name": "Padma Ramesh",
      "Date of Birth": "44582",
      "Centre Name": "K. C. Palli",
      "ECD Name": "Dhamodhar",
      "Reason for Referral": "Motor delay, Cognitive delay",
      "Clinical Findings": "Developmental Delay (GDD), predominantly motor-related, with intact cognition. No seizures or perinatal insults.",
      "Diagnosis": "Spastic Quadriparetic CP due to congenital cervical myelopathy and Complexus",
      "Tests Advised": "No tests advised",
      "Treatment Plan": "Physiotherapy, Occupational therapy, Neuro-surgery opinion, Orthotics if needed",
      "Prescription": "Baclofen (10mg/1ml), 1 ml in the morning and 1 ml in the evening",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 2,
      "Child Name": "Tharushree M",
      "Mother Name": "Rasi",
      "Date of Birth": "44204",
      "Centre Name": "Mittur",
      "ECD Name": "Shilpa",
      "Reason for Referral": "Developmental delay,",
      "Clinical Findings": "developmental delay, suspected spasms, and dystonia.",
      "Diagnosis": "she was diagnosed with Spastic Quadriplegic Cerebral Palsy (CP). The diagnosis also included Dystonia and Epilepsy.",
      "Tests Advised": "EEG",
      "Treatment Plan": "Physiotherapy, occupational Therapy, Opthal opinion",
      "Prescription": "Syp. Valproate (5ml/200mg), Tab.Pacitane 2mg ,Tab.Clonazepam 0.25mg",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 3,
      "Child Name": "S. Pooja Sree",
      "Mother Name": "Renuka",
      "Date of Birth": "45005",
      "Centre Name": "Ankiredlapalli",
      "ECD Name": "V Hareendra Prasadu",
      "Reason for Referral": "Stunting (SAM)",
      "Clinical Findings": "No complaints at present, Stunting based on measurements (Wt: 8.8kg, Ht: 77cm, HC: 47cm)",
      "Diagnosis": "Short stature for evaluation",
      "Tests Advised": "No specific tests advised",
      "Treatment Plan": "Prescription for Syp. Zincovit",
      "Prescription": "Syp. Zincovit 5ml once daily for 2 months",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 4,
      "Child Name": "Maheera Fathima",
      "Mother Name": "Ashma Kouser",
      "Date of Birth": "43777",
      "Centre Name": "Ramnagar",
      "ECD Name": "-",
      "Reason for Referral": "Speech delay\n * Aggression and behavioral issues\n * Tantrums",
      "Clinical Findings": "diagnosis of \"Speech delay\" and \"Behavioral issues (tantrums)\". The referral sheet also has checkboxes marked for \"Cognitive Delay\" and \"Language Delay\" and \"Behavior Disorder (Autism)\"",
      "Diagnosis": "Speech delay\n * Aggression and behavioral issues\n * Tantrums",
      "Tests Advised": "Occupational therapy.",
      "Treatment Plan": "Psychiatrist, Psychologist, Ophthalmologist, and Speech therapist.",
      "Prescription": "* Tab Risperidone 0.5 mg.\n * Vitamin D3 Sachets (60,000 IU), weekly once for 6 weeks.",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 5,
      "Child Name": "Vani Sree",
      "Mother Name": "Triveni",
      "Date of Birth": "42799",
      "Centre Name": "Vaddipalli",
      "ECD Name": "-",
      "Reason for Referral": "Delay in walking and running.\nDelay in speech development.\nLanguage delay noted.\nBirth history: No significant complications, but developmental milestones delayed.",
      "Clinical Findings": "Referral Findings,\nChild presented with motor, delay and language delay.\nNeurological concerns observed: tone abnormalities, power variations in upper and lower limbs, and reflex variations.",
      "Diagnosis": "Hypotonic Cerebral Palsy (Central) (Gait issues)\nSpeech Delay\nSevere Thinness",
      "Tests Advised": "MRI Brain & Spine\nGenetic analysis (whole exome sequencing)",
      "Treatment Plan": "Physiotherapy for improving motor functions.\nSpeech therapy for language development.\nDevelopmental pediatrician opinion.",
      "Prescription": "-",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 6,
      "Child Name": "Hemavathi",
      "Mother Name": "Thulasimani",
      "Date of Birth": "44044",
      "Centre Name": "Kadapalli",
      "ECD Name": "Vineeth",
      "Reason for Referral": "child presented with the following symptoms:\n * Global Developmental Delay (GDD)\n * Spasticity\n * Quadriparetic Cerebral Palsy (QP CP)\n * Constipation\n * No seizures were noted.",
      "Clinical Findings": "Spastic Quadriparetic CP\" with \"Constipation\". The diagnosis also notes \"no epilepsy.\" The mother reported some difficulties during pregnancy and delivery, which might be related to the child's condition.",
      "Diagnosis": "Spastic Quadriparetic CP\" with \"Constipation\". The diagnosis also notes \"no epilepsy.\"",
      "Tests Advised": "MRI of the brain",
      "Treatment Plan": "MRI of the brain",
      "Prescription": "* Syrup Baclofen (1ml)\n * Tab Pacitane 2mg (1/4 - 1/4 mg)\n * Physiotherapy",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    },
    {
      "S.No": 7,
      "Child Name": "Vaishnavi S",
      "Mother Name": "V. Shyam Sundar",
      "Date of Birth": "44927",
      "Centre Name": "Arimuthinapalli",
      "ECD Name": "-",
      "Reason for Referral": "Developmental Delay (GDD)",
      "Clinical Findings": "The child presented with a Global Developmental Delay (GDD). Other symptoms included abnormal tone and no eye contact. The diagnosis is recorded as \"Spastic CP\" and \"Dystonia\". The referral sheet also has checkboxes marked for \"Cognitive\", \"Motor\", and \"Language\" concerns.",
      "Diagnosis": "The child presented with a Global Developmental Delay (GDD). Other symptoms included abnormal tone and no eye contact. The diagnosis is recorded as \"Spastic CP\" and \"Dystonia\". The referral sheet also has checkboxes marked for \"Cognitive\", \"Motor\", and \"Language\" concerns.",
      "Tests Advised": "Physiotherapy was advised, along with botox injections. The notes mention Baclofen and Pacitane as prescribed medications.",
      "Treatment Plan": "Physiotherapy was advised, along with botox injections. The notes mention Baclofen and Pacitane as prescribed medications.",
      "Prescription": "-",
      "Referral Team": "Dr. Sandeep (Paediatric Neurologist), Dr. Sreelatha (Psychiatric), Dr. Revali & Dr. Pradeep (Physiotherapist)"
    }
  ];

   formatDate(serial: string): string {
    const base = new Date(1899, 11, 30);
    const date = new Date(base.getTime() + Number(serial) * 86400000);
    return date.toLocaleDateString();
  }

  changeFlag() {
    this.hideShow = !this.hideShow;
  }
}
